import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import { MdDeleteOutline } from "react-icons/md";
import { RiAliensFill, RiEditLine } from "react-icons/ri";
import { stringify, v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [showFin, setShowFin] = useState(false);

  useEffect(() => {
    let taskString = localStorage.getItem("tasks");
    if (taskString) {
      let t = JSON.parse(taskString);
      setTasks(t);
    }
  }, [])

  useEffect(() => {
    saveToLocalStorage();
  }, [tasks])



  const saveToLocalStorage = (params) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }


  const handleSave = () => {
    if (task.length <= 3) {
      alert("Task length must be at least 3 characters.");
      return;
    }
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
  }

  const handleEdit = (req) => {
    setTask(req.task);
    handleDelete(req.id);
  }

  const handleDelete = (rid) => {
    let new_t = tasks.filter(x => {
      return x.id != rid;
    })
    setTasks(new_t);
  }

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleToggle = (e) => {
    let rid = e.target.name;
    let rt = tasks.findIndex(x => {
      return x.id === rid;
    })
    let n_tasks = [...tasks];
    n_tasks[rt].isCompleted = !n_tasks[rt].isCompleted;
    setTasks(n_tasks);
  }

  const toggleFin = () => {
    setShowFin(!showFin);
  }
  



  return (
    <>
      <Navbar />
      <div className='Container md:mx-auto md:p-5 bg-red-950'>
        <div className='bg-black rounded-xl md:m-5'><h1 className="text-center text-white font-extrabold text-3xl md:m-10 md:mb-0 md:p-3"> Add Tasks</h1>

          <div className='mx-10'><input type="text" name="" id="" placeholder='Type your task here' className='w-[50vw] p-3 rounded-lg outline-none hover:bg-slate-200 mr-2' onChange={handleChange} value={task} /><button className='bg-gray-500 text-white p-3 rounded-xl border-black border-2 hover:bg-slate-600' onClick={handleSave}>Save</button> </div>

          <div className='mt-5 items-center justify-center text-center'><div className='Heading md:p-3 text-white font-extrabold text-3xl'>Your Tasks</div>

          <div className='text-white font-semibold'><input type="checkbox" name="fin" id="fin" checked = {showFin} onChange={toggleFin}/> Show finished tasks</div>

            <div className='Tasks min-h-[50vh] md:w-[80vw] border-white border-2 md:m-5 mt-0 rounded-md bg-slate-800'>
              {tasks.length === 0 && <div className='text-3xl font-semibold text-white mt-10'>No tasks to display</div>}
              {tasks.map(elem => {

                return (showFin || !elem.isCompleted) && <div key={elem.id} className='Task'>
                  <div className="text flex justify-between p-2">

                    <div className='flex gap-2'><input type="checkbox" name={elem.id} id="check" onClick={handleToggle} value={elem.isCompleted} checked = {elem.isCompleted} />

                      <div
                        className={
                          elem.isCompleted
                            ? "line-through TEXT_OF_TASK p-2 rounded-xl border-black bg-slate-200 w-[60vw] text-left"
                            : "TEXT_OF_TASK rounded-xl border-black bg-slate-200 w-[60vw] text-left p-3 "
                        }
                        style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" }}
                      >
                        {elem.task}
                      </div>
                    </div>

                    <div className="buttons flex gap-3 m-2">

                      <button className="edit bg-gray-500 text-white p-2 rounded-xl border-black border-2 hover:bg-slate-600 h-10" onClick={(e) => { handleEdit(elem) }}><RiEditLine />
                      </button>

                      <button className="delete bg-gray-500 text-white p-2 rounded-xl border-black border-2 hover:bg-slate-600 h-10" onClick={(e) => { handleDelete(elem.id) }} ><MdDeleteOutline />
                      </button>

                    </div>
                  </div>
                </div>
              })}
            </div>
          </div></div>
      </div>
      <Footer />
    </>
  )
}

export default App
