var reverseList = function(head){
    if(!head || !head.next) return head;

    let pre = null;
        current = head;
        next;
    
    while(current){
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}