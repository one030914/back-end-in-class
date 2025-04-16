export default function Page() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">System Overview</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-stone-400 rounded-lg shadow">Orders: 0</div>
                <div className="p-4 bg-stone-400 rounded-lg shadow">Current stock warning: 0</div>
                <div className="p-4 bg-stone-400 rounded-lg shadow">Sales: $0</div>
            </div>
        </div>
    );
}
