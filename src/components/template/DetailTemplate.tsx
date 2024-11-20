import { Header } from "@/components/atom";

export default function DetailTemplate({ id }) {
  return (
    <>
      <Header />
      <h1 className="font-bold text-2xl text-center	mt-4">No. {id}</h1>
    </>
  )
}