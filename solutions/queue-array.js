function MyQueueSized(maxCommandCount, maxQueueSize) {
  if (maxCommandCount > 5000) {
    return 'max commands count is 5000';
  }

  if (maxQueueSize > 5000) {
    return 'max queue size is 5000';
  }

  let counter = 0;

  let head = 0;
  let tail = 0;

  const queue = new Array(maxQueueSize + 1).fill(undefined);

  const handler = (command) => {
    counter++;

    if (counter > maxCommandCount) {
      return;
    }

    if (command.startsWith('push')) {
      const nextTailIndex = tail === maxQueueSize ? 0 : tail + 1;

      if (nextTailIndex === head) {
        console.log('error');
      } else {
        const n = command.replace(/\D+/g, '');

        queue[tail] = n;

        tail = nextTailIndex;
      }
    } else if (command.startsWith('pop')) {
      const n = queue[head];

      if (n !== undefined) {
        queue[head] = undefined;

        head = head === maxQueueSize ? 0 : head + 1;
      }

      console.log(n ?? 'None');
    } else if (command.startsWith('peek')) {
      const n = queue[head];

      console.log(n ?? 'None');
    } else if (command.startsWith('size')) {
      console.log(tail - head);
    }

    return handler;
  };

  return handler;
}

MyQueueSized(5001, 0); // 'Количество команд, оно не превосходить 5000';
MyQueueSized(1, 5001); // 'Максимально допустимый размер очереди, он не превосходит 5000.';

console.log('-------');
let queue = MyQueueSized(8, 2);
queue('peek');   // None
queue('push 5'); //
queue('push 2'); //
queue('peek');   // 5
queue('size');   // 2
queue('size');   // 2
queue('push 1'); // error
queue('size');   // 2
console.log('-------');
queue = MyQueueSized(10, 1);
queue('push 1'); //
queue('size');   // 1
queue('push 3'); // error
queue('size');   // 1
queue('push 1'); // error
queue('pop');    // 1
queue('push 1'); //
queue('pop');    // 1
queue('push 3'); //
queue('push 3'); // error

// custom test
queue = MyQueueSized(10, 4);
queue('push 1'); //
queue('push 2'); //
queue('push 3'); //
queue('pop');    // 1
queue('pop');    // 2
queue('push 4'); //
queue('push 5'); //
queue('push 6'); //
queue('push 7'); // error
