// we dont need any flag
import { Command } from "@oclif/command";
import boilerplate from "../api/boilerplateGen";

export default class Name extends Command {
  static description = "Name of your project directory to be created";

  static args = [{ name: "directory" }];

  async run() {
    const { args } = this.parse(Name);
    const dir = args.directory;
    if (dir) {
      boilerplate.makeProjectDir(dir); //
      boilerplate.makeTSConfig(dir); //
      boilerplate.makePackageJSON(dir);
      boilerplate.makeSrc(dir);
      boilerplate.makeDist(dir);
      boilerplate.makeIndexTS(dir);
    }
  }
}
