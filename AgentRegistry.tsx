export default function AgentRegistry() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        AI Agent Registry
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          Research Agent
        </div>

        <div className="border rounded-xl p-6">
          Trading Agent
        </div>

        <div className="border rounded-xl p-6">
          Coding Agent
        </div>

      </div>
    </section>
  );
}
