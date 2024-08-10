import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import axios from "axios";
import ConfirmationModal from "../commonComponents/ConfirmationModal"; // Importing the ConfirmationModal component
import { useNavigate, useParams } from "react-router-dom";

const DataTable = ({ dataUploaded, onDelete }) => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [deletingId, setDeletingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`your-api-endpoint/${deletingId}`)
      .then((response) => {
        onDelete(deletingId); // Remove the item from the state after successful deletion
        setDeletingId(null);
        setIsModalOpen(false); // Close the confirmation modal
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
        setIsModalOpen(false); // Close the confirmation modal
      });
  };

  const handleDeleteCancel = () => {
    setDeletingId(null);
    setIsModalOpen(false); // Close the confirmation modal
  };

  return (
    <div className=" rounded-lg border-black border">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b-2">
            <th className="py-2">Name</th>
            <th className="py-2">Uploaded Date & Time</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataUploaded.map((item) => (
            <tr key={item.id} className="border-b-2">
              <td className="py-2">{item.name}</td>
              <td className="py-2">{item.uploadDate}</td>
              <td className="py-2">{item.status}</td>
              <td className="flex justify-end">
                <button
                  className="py-2 px-3 border"
                  onClick={() => navigate(`/project/${projectId}/file/edit/3`)}
                >
                  Edit
                </button>
                <button
                  className="py-2 text-red-700 px-2 border mr-10"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        Are you sure you want to delete this item?
      </ConfirmationModal>
    </div>
  );
};

export default DataTable;
