import React from "react";

import { playbookTableColumns } from "./pluginTableColumns";
import { PluginsTypes } from "../../../constants/pluginConst";
import PluginWrapper from "./PluginWrapper";
import { PLAYBOOKS_CONFIG_URI } from "../../../constants/apiURLs";

export default function Playbooks() {
  console.debug("Playbooks rendered!");

  return (
    <PluginWrapper
      heading="Playbooks"
      description="Playbooks are designed to be easy to share sequence of running Plugins (Analyzers, Connectors, ...) on a particular kind of observable."
      apiUrl={PLAYBOOKS_CONFIG_URI}
      columns={playbookTableColumns}
      type={PluginsTypes.PLAYBOOK}
    />
  );
}
