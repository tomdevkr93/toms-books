import { useRouter } from "next/router";

export default function BookDetailPage() {
  const router = useRouter();
  const { id: bookIDs } = router.query;
  console.log(bookIDs);
  return (
    <h1>
      bookIDs
      <ul>
        {bookIDs &&
          Array.isArray(bookIDs) &&
          bookIDs.map((id) => <li key={id}>{id}</li>)}
      </ul>
    </h1>
  );
}
