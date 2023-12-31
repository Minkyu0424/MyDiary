import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `이모션 다이어리 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;