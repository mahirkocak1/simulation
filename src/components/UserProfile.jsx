export default function UserProfile(props) {
  if (!props.todos || props.todos.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading tasks...</h2>
      </div>
    );
  }

  const todoElements = props.todos.map((item) => {
    return (
      <div className="todo-item" key={item.id}> 
        <span className="todo-text">{item.todo}</span>
        <span className={`status-badge ${item.completed ? 'status-completed' : 'status-pending'}`}>
          {item.completed ? "✅ Completed" : "⏳ Not Completed Yet"}
        </span>
      </div>
    );
  });

  return (
    <div className="profile-card">
      <button className="back-button" onClick={props.goToHomePage}>
        <span>⬅</span> Go Back To Home Page
      </button>
      <h2 style={{ marginBottom: "24px", color: "#111827" }}>To Do List</h2>
      <div className="todo-list">
        {todoElements}
      </div>
    </div>
  );
}