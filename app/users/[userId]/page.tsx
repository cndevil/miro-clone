interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const Page = ({ params }: UserIdPageProps) => {
  return <div className="">User Id: {params.userId}</div>;
};

export default Page;
