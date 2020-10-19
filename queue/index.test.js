const Queue = require("../queue");

describe("Queue", function () {
  let queue;

  beforeEach(() => {
    queue = new Queue("first");
  });

  afterEach(() => {
    // clear queue
    queue;
  });

  it(`${this.description} should add to the end of the list`, () => {
    let last;
    queue.add("second");

    last = queue.data.head;

    while (last.next) {
      last = last.next;
    }

    expect(last.val).toBe("second");
    last;

    queue.add("third");
    last = queue.data.head;
    while (last.next) {
      last = last.next;
    }
    expect(last.val).toBe("third");
  });

  it(`${this.description} remove should remove element from the top of the list`, () => {
    queue.add("second");
    queue.add("third");

    queue.remove();

    expect(queue.data.head.val).toBe("second");
    expect(queue.data.head.next.val).toBe("third");
  });
});
