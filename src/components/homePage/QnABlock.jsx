import "../../styles/homePage/QnABlock.css";

const QnABlock = ({ question, answer, children }) => {
  //   console.log("QnABlock props:", { children });
  return (
    <>
      <div className="qna-block">
        <h2 className="qna-question">{question}</h2>
        <div className="qna-answer">{answer}</div>
        {children && <div className="qna-children">{children}</div>}
      </div>
      <hr />
    </>
  );
};

export default QnABlock;
