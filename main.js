const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function () {
    console.log("DragStart has been triggered");
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  // dragend-: It is fired when a drag operation ends, such as releasing a mouse button
  //           or hitting the Esc key
  item.addEventListener("dragend", function () {
    console.log("DragEnd has been triggered");
    setTimeout(function () {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    // dragover-: It is fired when a dragged item is being dragged over a valid drop target,
    //            every few hundred milliseconds.
    list.addEventListener("dragover", function (e) {
      // The preventDefault() method cancels the event if it is cancelable, meaning that
      // the default action that belongs to the event will not occur.
      e.preventDefault();
      console.log("DragOver has been triggered");
    });

    // dragenter-: It is fired when a dragged item enters a valid drop target.
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      console.log("DragEnter has been triggered");
      this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });

    // dragleave-: It is fired when a dragged item leaves a valid drop target.
    list.addEventListener("dragleave", function (e) {
      console.log("DragLeave has been triggered");
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });

    // drop-: It is fired when an item is dropped on a valid drop target.
    list.addEventListener("drop", function (e) {
      console.log("Drop has been triggered");
	//   The append() method inserts specified content at the end of selected elements.
      this.append(draggedItem);
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }

}
