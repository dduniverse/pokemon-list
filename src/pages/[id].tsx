import { useRouter } from "next/router";
import DetailPage from "@/components/page/Detail";

function Detail() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <DetailPage id={id} />
  )
}

export default Detail;