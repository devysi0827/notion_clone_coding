import { useQuery } from "react-query";
import { getChallengers } from "logics/TestAPI";

export default function TestReactQueryComp() {
  const { status, data, error } = useQuery<any, Error>(
    "challengers",
    () => getChallengers(),
    {
      onSuccess(data) {
        console.log(data)
      },
      onError(err) {
        console.log(err)
      },
    }
    
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
  <>
  {data.entries.map((entry : any) => (
    <li key={entry.summonerId}>
      {entry.summonerName}
    </li>
    )) 
  }
  </>
)


  }