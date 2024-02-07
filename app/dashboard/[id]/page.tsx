export default async function DashboardDetails({
    params
}: {
    params: { id: string }
}) {
    return (
        <div>Details for {params.id}</div>
    );
} 