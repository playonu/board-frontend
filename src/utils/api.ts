import axios from 'axios';

interface BoardResponse {
  id: number;
  title: string;
  content: string;
  userId: number;
}

interface Auth {
  email: string;
  password: string;
}

export class BoardAPI {
  private static BOARDS = '/boards';

  static async get(): Promise<BoardResponse[]> {
    const { data } = await axios.get(this.BOARDS);
    return data;
  }

  static async post(title: string, content: string): Promise<BoardResponse> {
    const { data } = await axios.post(this.BOARDS, {
      title,
      content
    });
    return data;
  }

  static async put(
    id: number,
    title: string,
    content: string
  ): Promise<BoardResponse> {
    const { data } = await axios.put(`${this.BOARDS}/${id}`, {
      title,
      content,
    });
    return data;
  }

  static async delete(id: number): Promise<string> {
    const { data } = await axios.delete(`${this.BOARDS}/${id}`);
    return data;
  }
}

export class AuthAPI {
  private static AUTH = '/auth';

  static async signUp(auth: Auth): Promise<string> {
    const { data } = await axios.post(`${this.AUTH}/signup`, auth);
    return data;
  }

  static async signIn(auth: Auth): Promise<string> {
    const { data } = await axios.post(`${this.AUTH}/signin`, auth);
    return data;
  }
}