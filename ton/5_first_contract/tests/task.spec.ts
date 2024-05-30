import { Cell, toNano } from "@ton/core";
import { hex } from "../build/task.compiled.json";
import { Blockchain } from "@ton/sandbox";
import "@ton/test-utils";
import { TaskContract } from "../wrappers/TaskContract";

describe("task.fc contract tests", () => {
  it("our first test", async () => {
    const blockchain = await Blockchain.create();
    const codeCell = Cell.fromBoc(Buffer.from(hex, "hex"))[0];

    const myContract = blockchain.openContract(
      await TaskContract.createFromConfig({}, codeCell)
    );

    const senderWallet = await blockchain.treasury("sender");

    const sentMessageResult = await myContract.sendInternalMessage(
      senderWallet.getSender(),
      toNano("0.05")
    );

    // expect(sentMessageResult.transactions).toHaveTransaction({
    //   from: senderWallet.address,
    //   to: myContract.address,
    //   success: true,
    // });

    const data = await myContract.getData();

    // expect(data.sum).toBe(toNano("0.05").toString());
  });
});
