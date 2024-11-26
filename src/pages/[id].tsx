import { useRouter } from "next/router";
import DetailPage from "@/components/page/detail-page";
import { useEffect, useState } from "react";

function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const [validId, setValidId] = useState<number | null>(null);

  // 유효한 id인지 검증
  useEffect(() => {
    if (!id) return; // id가 아직 로드되지 않았으면 아무 작업도 하지 않음
    
    const parsedId = Number(id);

    // 숫자가 아니거나 존재하지 않는 포켓몬 번호이면 /404 페이지로 이동시키기
    if (isNaN(parsedId) || parsedId > 10277 || parsedId <= 0) {
      router.push("/404");
    } else {
      setValidId(parsedId);
    }
  }, [id]);

  // 유효한 id만 DetailPage로 전달
  return <DetailPage id={validId} />;
}

export default Detail;