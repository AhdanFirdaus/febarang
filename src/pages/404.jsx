import { useRouteError } from "react-router";

const ErorPage = () => {
  const eror = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected eror has occured</p>
      <p>{eror.statusText || eror.message}</p>
    </div>
  )
}

export default ErorPage;