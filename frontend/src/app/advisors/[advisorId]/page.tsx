export default function AdvisorDetailPage({ params }: { params: { advisorId: string } }) {
  return (
    <div>
      <h1>Advisor Detail</h1>
      <p>Advisor ID: {params.advisorId}</p>
    </div>
  );
}