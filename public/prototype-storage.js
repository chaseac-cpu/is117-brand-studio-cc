export const demoOrderStorage = (() => {
  const prefix = "deep-white:demo-order:v1:";

  return {
    save(items, unitPrice) {
      const id = Array.from(crypto.getRandomValues(new Uint8Array(8)), (byte) =>
        byte.toString(16).padStart(2, "0"),
      )
        .join("")
        .toUpperCase();
      const order = {
        reference: `DW-${id}`,
        createdAt: Date.now(),
        items,
        unitPrice,
      };
      localStorage.setItem(prefix + order.reference, JSON.stringify(order));
      return order;
    },

    read() {
      const orders = [];
      for (const key of Object.keys(localStorage)) {
        if (!key.startsWith(prefix)) continue;
        try {
          const order = JSON.parse(localStorage.getItem(key));
          if (
            order?.reference === key.slice(prefix.length) &&
            Number.isFinite(order.createdAt) &&
            Number.isSafeInteger(order.unitPrice) &&
            order.unitPrice > 0 &&
            Array.isArray(order.items) &&
            order.items.length > 0 &&
            order.items.every(
              (item) =>
                ["S", "M", "L", "XL"].includes(item?.size) &&
                Number.isSafeInteger(item.quantity) &&
                item.quantity > 0,
            )
          ) {
            orders.push(order);
          }
        } catch (error) {
          if (!(error instanceof SyntaxError)) throw error;
        }
      }
      return orders.sort((a, b) => b.createdAt - a.createdAt);
    },
  };
})();
