function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next; // store next node
    current.next = prev; // reverse the link
    prev = current; // move one step forward in the list
    current = next; // move one step forward in the list
  }
  return prev; // prev is now pointing to the new head
}
