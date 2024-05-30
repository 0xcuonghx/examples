import {
  Address,
  Cell,
  Contract,
  ContractProvider,
  SendMode,
  Sender,
  beginCell,
  contractAddress,
} from "@ton/core";

export class TaskContract implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) {}

  static createFromConfig(config: any, code: Cell, workchain = 0) {
    const data = beginCell().endCell();
    const init = { code, data };
    const address = contractAddress(workchain, init);

    return new TaskContract(address, init);
  }

  async sendInternalMessage(
    provider: ContractProvider,
    sender: Sender,
    value: bigint
  ) {
    await provider.internal(sender, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().endCell(),
    });
  }

  async getData(provider: ContractProvider) {
    console.log(await provider.get("get_sum", []).);
    // const { stack } = await provider.get("get_sum", []);
    // console.log(stack);
    // return {
    //   sum: stack.readBigNumber(),
    // };
  }
}
