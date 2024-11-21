import { useRouter } from "next/router";
import DetailPage from "@/components/page/detail-page";

function Detail() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <DetailPage id={id} />
  )
}

export default Detail;