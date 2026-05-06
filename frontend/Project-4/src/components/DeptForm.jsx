

function DeptForm({ title, formData, handleChange, handleSubmit }) {


  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Department Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Create Department</button>
      </form>
    </div>  
  )
}

export default DeptForm