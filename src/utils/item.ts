import { Todo } from "@/types/todo";

// 항목 등록
export const createTodo = async (name: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/items`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add todo");
  }

  const data = await response.json();
  return data;
};

// 항목 목록 조회
export const getTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ujin/items`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
};

// 항목 상세 조회
export const getTodoById = async (id: string): Promise<Todo> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }
  const data = await response.json();
  return data;
};

// 항목 수정
export const updateTodo = async (
  id: string,
  updates: Partial<Todo>
): Promise<Todo> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  const data = await response.json();
  return data;
};

// 항목 삭제
export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ujin/items/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
