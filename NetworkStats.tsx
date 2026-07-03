export default function NetworkStats() {
  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Agents
          <h2>12,541</h2>
        </div>

        <div className="border rounded-xl p-6">
          Workflows
          <h2>84,221</h2>
        </div>

        <div className="border rounded-xl p-6">
          Payments
          <h2>◎ 482K</h2>
        </div>

        <div className="border rounded-xl p-6">
          Reputation
          <h2>99.4%</h2>
        </div>

      </div>
    </section>
  );
}
