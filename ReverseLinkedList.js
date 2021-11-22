// a -> b -> c -> null
// null <- a <- b <- c
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    
    while(curr){
        let temp = curr.next;
        
        //change dir
        curr.next = prev;
        
        //move both by one
        prev = curr;
        curr = temp;
    }
    
    return prev;
};
