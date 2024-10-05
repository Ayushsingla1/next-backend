import axios from "axios";

async function getUserDetails() {
  // await new Promise((r)=>setTimeout(r, 5000));
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="bg-black w-screen h-screen text-center text-white">
      hello
      <br/>
      {userDetails.email}
      <br/>
      {userDetails.name}
    </div>
  );
}
