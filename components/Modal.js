// OWNER: Saniha — Issue #8 (Small components)
// A pop-up box on top of the page.
// Use it like: <Modal open={showPopup} title="Confirm" onClose={() => setShowPopup(false)}> ... </Modal>

export default function Modal({ open, title, onClose, children }) {
  if (!open) {
    return null; // show nothing when closed
  }

  return (
    // dark background — clicking it closes the popup
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      {/* white box — stopPropagation stops clicks inside from closing it */}
      <div className="w-full max-w-md rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
