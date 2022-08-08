const base = "http://127.0.0.1:3000";

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

interface ICar {
  name: string;
  color: string;
  id: number;
}

interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export const getCars = async (page: number, limit: number) => {
  const response = await fetch(`${garage}?page=${page}&limit=${limit}`);
  return {
    item: await response.json(),
    count: await response.headers.get("X-Total-Count"),
  };
};

export const getCar = async (id: number) =>
  (await fetch(`${garage}/${id}`)).json();

export const createCar = async (car: ICar) =>
  (
    await fetch(`${garage}`, {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

export const deleteCar = async (id: number) =>
  (
    await fetch(`${garage}/${id}`, {
      method: "DELETE",
    })
  ).json();

export const updateCar = async (id: number, car: ICar) =>
  (
    await fetch(`${garage}/${id}`, {
      method: "PUT",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

export const startEngine = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const drive = async (id: number) => {
  const result = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return result.status !== 200
    ? { success: false }
    : { ...(await result.json()) };
};

const getSortOder = (sort: any, oder: any) => {
  if (sort && oder) return `&_sort=${sort}&_order${oder}`;
  return "";
};

export const getWinners = async (
  page: number,
  limit: number,
  sort: any,
  order: any
) => {
  const response = await fetch(
    `${winners}?_page=${page}&_limit=${limit}${getSortOder(sort, order)}`
  );
  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner: { id: number }) => ({
        ...winner,
        car: await getCar(winner.id),
      }))
    ),
    count: response.headers.get("X-Total-Count"),
  };
};

export const getWinner = async (id: number) =>
  (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) =>
  (await fetch(`${winners}/${id}`)).status;

export const deleteWinner = async (id: number) =>
  (
    await fetch(`${winners}/${id}`, {
      method: "DELETE",
    })
  ).json();

export const createWinner = async (car: ICar) =>
  (
    await fetch(`${winners}`, {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

export const updateWinner = async (id: number, car: ICar) =>
  (
    await fetch(`${winners}/${id}`, {
      method: "PUT",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

// export const saveWinner = async ({id: number, time: number}) => {
//   const winerStatus = await getWinnerStatus(id);
//   if (winerStatus === 404) {
//     await createWinner({ id, wins: 1, time });
//   } else {
//     const winner = await getWinner(id);
//     await updateWinner(id, {
//       id,
//       wins: winner.wins + 1,
//       time: time < winner.time ? time : winner.time,
//     });
//   }
// };
