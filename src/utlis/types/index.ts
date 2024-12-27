export interface DetailsProps {
  message: {
    created_at: string;
    id: number;
    message: string;
    title: string;
    updated_at: string;
    user_id: number;
  };
  receivers: [
    {
      contact_id: number;
      created_at: string;
      email: string;
      id: number;
      name: string;
      phone: string;
      updated_at: string;
      user_id: number;
    },
  ];
  verifiers: [
    {
      contact_id: number;
      created_at: string;
      email: string;
      id: number;
      name: string;
      phone: string;
      updated_at: string;
      user_id: number;
    },
  ];
}
