function deleteDuplicates(head) {
  // Initialize the current node as the head of the list.
  let current = head;

  // Traverse through the list until the end is reached.
  while (current && current.next) {
    // If the next node is a duplicate, bypass it.
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      // If not, move to the next node.
      current = current.next;
    }
  }
  // Return the modified head of the list.
  return head;
}
