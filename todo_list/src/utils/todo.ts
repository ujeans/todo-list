// 체크박스 클릭

export const toggleTodo = async (
  id: number,
  currentStatus: boolean,
  updateTodo: (updatedTodo: { id: number; isCompleted: boolean }) => void
) => {
  const updatedIsCompleted = !currentStatus;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: updatedIsCompleted }),
    }
  );

  if (response.ok) {
    // API 응답이 성공하면 업데이트된 상태를 콜백 함수로 전달
    updateTodo({ id, isCompleted: updatedIsCompleted });
  } else {
    console.error("Failed to update todo");
  }
};
