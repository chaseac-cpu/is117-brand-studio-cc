import { demoOrderStorage } from "./prototype-storage.js";

(() => {
  const form = document.querySelector("#product-form");
  const sizeError = document.querySelector("#size-error");
  const quantity = document.querySelector("#quantity");
  const quantityError = document.querySelector("#quantity-error");
  const bagCount = document.querySelector("#bag-count");
  const bagStatus = document.querySelector("#bag-status");
  const bagItems = document.querySelector("#bag-items");
  const clearBag = document.querySelector("#clear-bag");
  const reviewOrder = document.querySelector("#review-order");
  const review = document.querySelector("#order-review");
  const reviewTitle = document.querySelector("#review-title");
  const reviewItems = document.querySelector("#review-items");
  const reviewTotal = document.querySelector("#review-total");
  const finishOrder = document.querySelector("#finish-order");
  const historyPanel = document.querySelector("#history-panel");
  const historyStatus = document.querySelector("#history-status");
  const historyItems = document.querySelector("#history-items");
  const sizes = [...form.querySelectorAll('input[name="size"]')];
  const unitPrice = 2800;
  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const bag = new Map();
  const directReview =
    new URLSearchParams(location.search).get("version") === "b";

  if (directReview) {
    document.querySelector("#version-a").removeAttribute("aria-current");
    document.querySelector("#version-b").setAttribute("aria-current", "page");
    form.querySelector("button").textContent = "Review demo order";
  }

  document.querySelector("#unit-price").textContent = money.format(
    unitPrice / 100,
  );

  const describeItem = ({ size, quantity }) =>
    `White T-shirt · Size ${size} · Quantity ${quantity}`;

  const currentItems = () =>
    sizes
      .filter((input) => bag.has(input.value))
      .map((input) => ({
        size: input.value,
        quantity: bag.get(input.value),
      }));

  const total = (items, price) =>
    money.format(
      items.reduce((sum, item) => sum + item.quantity * price, 0) / 100,
    );

  const renderList = (list, labels) => {
    list.replaceChildren(
      ...labels.map((label) => {
        const item = document.createElement("li");
        item.textContent = label;
        return item;
      }),
    );
  };

  const renderBag = () => {
    const items = currentItems();
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    bagCount.textContent = String(count);
    clearBag.disabled = count === 0;
    reviewOrder.disabled = count === 0;
    review.hidden = true;
    renderList(bagItems, items.map(describeItem));
  };

  const openReview = () => {
    const items = currentItems();
    renderList(reviewItems, items.map(describeItem));
    reviewTotal.textContent = `Demo total ${total(items, unitPrice)}`;
    review.hidden = false;
    reviewTitle.focus();
  };

  const renderHistory = () => {
    try {
      const orders = demoOrderStorage.read();
      historyStatus.textContent = orders.length
        ? ""
        : "No saved demo orders yet.";
      renderList(
        historyItems,
        orders.map((order) =>
          [
            order.reference,
            ...order.items.map(describeItem),
            total(order.items, order.unitPrice),
          ].join(" · "),
        ),
      );
    } catch {
      historyStatus.textContent =
        "Demo order history is unavailable in this browser.";
      historyItems.replaceChildren();
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = sizes.find((input) => input.checked);
    if (!selected) {
      sizeError.hidden = false;
      sizes.forEach((input) => input.setAttribute("aria-invalid", "true"));
      sizes[0].focus();
      return;
    }

    if (!quantity.validity.valid) {
      quantityError.hidden = false;
      quantity.setAttribute("aria-invalid", "true");
      quantity.focus();
      return;
    }

    if (directReview) bag.clear();
    bag.set(
      selected.value,
      (bag.get(selected.value) ?? 0) + quantity.valueAsNumber,
    );
    renderBag();
    bagStatus.textContent = `Added size ${selected.value}. Your demo bag contains ${bagCount.textContent}.`;
    if (directReview) openReview();
  });

  form.addEventListener("input", (event) => {
    if (event.target === quantity) {
      quantityError.hidden = true;
      quantity.removeAttribute("aria-invalid");
    } else {
      sizeError.hidden = true;
      sizes.forEach((input) => input.removeAttribute("aria-invalid"));
    }
  });

  clearBag.addEventListener("click", () => {
    bag.clear();
    renderBag();
    bagStatus.textContent =
      "Your demo bag is empty. Choose a size to try it again.";
    (sizes.find((input) => input.checked) ?? sizes[0]).focus();
  });

  reviewOrder.addEventListener("click", openReview);

  finishOrder.addEventListener("click", () => {
    if (!bag.size) return;
    try {
      const order = demoOrderStorage.save(currentItems(), unitPrice);
      bag.clear();
      renderBag();
      bagStatus.textContent = `Demo order saved. Your reference is ${order.reference}.`;
      historyPanel.open = true;
      renderHistory();
      historyPanel.querySelector("summary").focus();
    } catch {
      bagStatus.textContent =
        "The demo order could not be saved. Check your browser storage settings and try again.";
    }
  });

  historyPanel.addEventListener("toggle", () => {
    if (historyPanel.open) renderHistory();
  });
  window.addEventListener("storage", renderHistory);
  renderHistory();
})();
