import Header from "../atom/Header";

function DetailTemplate({ id }) {
  return (
    <>
      <Header />
      <h1 className="font-bold text-2xl text-center	mt-4">No. {id}</h1>
    </>
  )
}

export default DetailTemplate;