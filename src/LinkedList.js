// 연결리스트: 각 요소를 포인터로 연결하여 관리하는 선형 자료구조
// 탐색은 O(n), 요소 추가와 제거는 O(1)이 소요된다. 만약 위치를 탐색해야 한다면 선형시간이 소요된다. 이에 주의한다.
// 배열과 연결 리스트는 메모리 위치부터 차이가 난다.

// 1. 단일 연결 리스트
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    find(value) {
        let curNode = this.head;
        while(curNode.value !== value) {
            curNode = curNode.next;
        }
        return curNode;
    }

    // 끝에 추가
    append(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // 중간에 추가
    insert(node, value) {
        const newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value) {
        let prevNode = this.head;
        while(prevNode.value !== value) {
            prevNode = prevNode.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let curNode = this.head;
        let displayString = '[';
        while(curNode !== null) {
            displayString += `${curNode.value}, `;
            curNode = curNode.next;
        }
        displayString = displayString.substring(0, displayString.length - 2);
        displayString += ']';
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();