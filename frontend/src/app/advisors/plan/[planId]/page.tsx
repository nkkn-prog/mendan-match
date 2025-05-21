export default function PlanDetailPage({ params }: { params: { planId: string } }) {
  return (
    <div>
      <h1>Plan Detail</h1>
      <p>Plan ID: {params.planId}</p>
    </div>
  );
}