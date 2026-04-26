import { useState } from "react";
import "./App.css";
import Book from "./Book";
import Student from "./Student";
import Todo from "./Todo";

function App() {
  const [toglebtn, setToglebtn] = useState(false);
  const handleToggle = () => {
    setToglebtn(!toglebtn);
  }


const books = [
  { id: 1, name: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", price: 350, available: true },
  { id: 2, name: "দেবদাস", author: "শরৎচন্দ্র চট্টোপাধ্যায়", price: 280, available: false },
  { id: 3, name: "লালসালু", author: "সৈয়দ ওয়ালীউল্লাহ", price: 300, available: true },
  { id: 4, name: "নক্ষত্রের রাত", author: "হুমায়ূন আহমেদ", price: 400, available: true },
  { id: 5, name: "শঙ্খনীল কারাগার", author: "হুমায়ূন আহমেদ", price: 320, available: false },
  { id: 6, name: "কবি", author: "তারাশঙ্কর বন্দ্যোপাধ্যায়", price: 360, available: true },
  { id: 7, name: "আগুনের পরশমণি", author: "হুমায়ূন আহমেদ", price: 380, available: false },
  { id: 8, name: "চোখের বালি", author: "রবীন্দ্রনাথ ঠাকুর", price: 340, available: true },
  { id: 9, name: "অরণ্যের দিনরাত্রি", author: "সুনীল গঙ্গোপাধ্যায়", price: 310, available: false },
  { id: 10, name: "একাত্তরের দিনগুলি", author: "জাহানারা ইমাম", price: 450, available: true },
];
const students = [
  { id: 1, name: "Rahim Uddin", age: 20, grade: "A+", passed: true },
  { id: 2, name: "Nusrat Jahan", age: 19, grade: "A", passed: true },
  { id: 3, name: "Karim Ahmed", age: 21, grade: "B+", passed: true },
  { id: 4, name: "Sadia Islam", age: 18, grade: "A+", passed: true },
  { id: 5, name: "Arif Hossain", age: 22, grade: "C", passed: false },
  { id: 6, name: "Mim Akter", age: 20, grade: "B", passed: true },
  { id: 7, name: "Tanvir Hasan", age: 23, grade: "A", passed: true },
  { id: 8, name: "Jannat Ara", age: 19, grade: "B+", passed: true },
];
  return (

    <>
<div className="flex justify-center mt-6">
  <button
    onClick={handleToggle}
    className="px-6 py-3 rounded-xl font-semibold text-white 
               bg-gradient-to-r from-indigo-500 to-purple-600 
               hover:from-purple-600 hover:to-indigo-500
               shadow-lg hover:shadow-2xl 
               transform hover:scale-105 active:scale-95
               transition-all duration-300 ease-in-out"
  >
    {toglebtn ? "Show Student List" : "Show Book List"}
  </button>
</div>
    {toglebtn ?  <div className="max-w-7xl mx-auto px-4 py-6">
  {/* Title */}
  <h1 className="text-center font-bold text-3xl mb-6">
    Book List{" "}
    <span className="text-red-500">
      {books.length}
    </span>
  </h1>

  {/* Grid Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {books.map((book) => (
      <div
        key={book.id}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4"
      >
        <Book book={book} />
      </div>
    ))}
  </div>
</div>:     <div>
      <h1 className="text-center font-bold text-2xl my-2">Student List: <samp className="text-red-500">{students.length}</samp></h1>
      <div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {students.map((student) => (
    <div
      key={student.id}
      className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition duration-300"
    >
      <Student student={student} />
    </div>
  ))}
</div>




      </div>
    </div> }


    </>
  );
}

export default App;
