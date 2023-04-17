// 선형 큐는 배열과 linked list로 구현 가능.
// 코딩 테스트에서는 구현 방법이 간단한 배열로 구현하는 것을 추천.
// class Queue {
//     constructor() {
//         this.queue = [];
//         this.front = 0;
//         this.rear = 0;
//     }

//     enqueue(value) {
//         this.queue[this.rear++] = value;
//     }

//     dequeue() {
//         let value;
//         value = this.queue[this.front];
//         delete this.queue[this.front];
//         this.front++;
//         return value;
//     }

//     peek() {
//         return this.queue[this.front];
//     }

//     size() {
//         return this.rear - this.front;
//     }
// }

// 환형 큐는 연결 리스트로 구현했을 때 이점이 없다. 어짜피 크기가 한정되어 있기 때문.
// maxSize를 받아와 변수에 저장하는 것이 특징이다.
// 사실 코테에서 환형 큐를 굳이 사용해야 하는 경우는 잘 없다.
// class CircularQueue {
//     constructor(maxSize) {
//         this.maxSize = maxSize;
//         this.circularQueue = [];
//         this.front = 0;
//         this.rear = 0;
//         this.size = 0;
//     }

//     enqueue(value) {
//         if(this.isFull()) {
//             console.log('queue is full!');
//             return;
//         }
//         this.queue[this.rear] = value;
//         this.rear = (this.rear + 1) % this.maxSize;
//         this.size += 1;
//     }

//     dequeue() {
//         if(this.isEmpty()) {
//             console.log('there\'s nothing to dequeue!');
//             return;
//         }
//         const value = this.queue[this.front];
//         delete this.queue[this.front];
//         this.front = (this.front + 1) % this.maxSize;
//         this.size -= 1;
//         return value;
//     }

//     isFull() {
//         return this.size === this.maxSize;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     peek() {
//         return this.queue[this.front];
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class ListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek(){
        return this.head.value;
    }
}

// 큐 프린터
// 내 중요도가 가장 크면 dequeue 하고, 아니라면 peek 하고 enqueue하라는 거..
// 내 로직으로는 max prioritie를 구할 때 O(n), 

function solution(priorities, location) {
    const queue = new ListQueue();
    
    // initialize queue and maxPriority
    priorities.map((priority, idx) => {
        queue.enqueue([priority, idx]); // save priority and location
    })
    // 오름차순으로 정렬
    priorities.sort();
    
    let maxPriority = 0;
    let length = priorities.length;
    let cnt = 0;
    while(length !== 0) {
        maxPriority = priorities[length-1];
        const curValue = queue.peek();
        
        if(curValue[0] < maxPriority) {
            queue.enqueue(curValue);
            queue.dequeue();
        }
        else {
            cnt++;
            length--;

            const tmp = queue.dequeue();
            if(tmp[1] === location) return cnt;
        }
    }
    return cnt;
}

module.exports = solution;