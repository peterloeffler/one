/* ------------------------------------------------------------------------- *
 * Copyright 2002-2022, OpenNebula Project, OpenNebula Systems               *
 *                                                                           *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may   *
 * not use this file except in compliance with the License. You may obtain   *
 * a copy of the License at                                                  *
 *                                                                           *
 * http://www.apache.org/licenses/LICENSE-2.0                                *
 *                                                                           *
 * Unless required by applicable law or agreed to in writing, software       *
 * distributed under the License is distributed on an "AS IS" BASIS,         *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
 * See the License for the specific language governing permissions and       *
 * limitations under the License.                                            *
 * ------------------------------------------------------------------------- */
import {
  Cell2X2 as InstancesIcons,
  ModernTv as VmsIcons,
  Shuffle as VRoutersIcons,
  Archive as TemplatesIcon,
  GoogleDocs as TemplateIcon,
  Box as StorageIcon,
  Db as DatastoreIcon,
  BoxIso as ImageIcon,
  SimpleCart as MarketplaceIcon,
  CloudDownload as MarketplaceAppIcon,
  ServerConnection as NetworksIcon,
  NetworkAlt as NetworkIcon,
  KeyframesCouple as NetworkTemplateIcon,
  CloudSync as InfrastructureIcon,
  Server as ClusterIcon,
  HardDrive as HostIcon,
  MinusPinAlt as ZoneIcon,
  Home as SystemIcon,
  User as UserIcon,
  Group as GroupIcon,
} from 'iconoir-react'

import loadable from '@loadable/component'
import { RESOURCE_NAMES, T } from 'client/constants'

const VirtualMachines = loadable(
  () => import('client/containers/VirtualMachines'),
  { ssr: false }
)
const VirtualMachineDetail = loadable(
  () => import('client/containers/VirtualMachines/Detail'),
  { ssr: false }
)
const VirtualRouters = loadable(
  () => import('client/containers/VirtualRouters'),
  { ssr: false }
)

const VmTemplates = loadable(() => import('client/containers/VmTemplates'), {
  ssr: false,
})
const InstantiateVmTemplate = loadable(
  () => import('client/containers/VmTemplates/Instantiate'),
  { ssr: false }
)
const CreateVmTemplate = loadable(
  () => import('client/containers/VmTemplates/Create'),
  { ssr: false }
)
// const VrTemplates = loadable(() => import('client/containers/VrTemplates'), { ssr: false })
// const VmGroups = loadable(() => import('client/containers/VmGroups'), { ssr: false })

const Datastores = loadable(() => import('client/containers/Datastores'), {
  ssr: false,
})
const Images = loadable(() => import('client/containers/Images'), {
  ssr: false,
})
const Marketplaces = loadable(() => import('client/containers/Marketplaces'), {
  ssr: false,
})
const MarketplaceApps = loadable(
  () => import('client/containers/MarketplaceApps'),
  { ssr: false }
)
const CreateMarketplaceApp = loadable(
  () => import('client/containers/MarketplaceApps/Create'),
  { ssr: false }
)

const VirtualNetworks = loadable(
  () => import('client/containers/VirtualNetworks'),
  { ssr: false }
)
const VNetworkTemplates = loadable(
  () => import('client/containers/VNetworkTemplates'),
  { ssr: false }
)
// const NetworkTopologies = loadable(() => import('client/containers/NetworkTopologies'), { ssr: false })
// const SecurityGroups = loadable(() => import('client/containers/SecurityGroups'), { ssr: false })

const Clusters = loadable(() => import('client/containers/Clusters'), {
  ssr: false,
})
const ClusterDetail = loadable(
  () => import('client/containers/Clusters/Detail'),
  { ssr: false }
)
const Hosts = loadable(() => import('client/containers/Hosts'), { ssr: false })
const HostDetail = loadable(() => import('client/containers/Hosts/Detail'), {
  ssr: false,
})
const CreateHost = loadable(() => import('client/containers/Hosts/Create'), {
  ssr: false,
})
const Zones = loadable(() => import('client/containers/Zones'), { ssr: false })

const Users = loadable(() => import('client/containers/Users'), { ssr: false })
const UserDetail = loadable(() => import('client/containers/Users/Detail'), {
  ssr: false,
})
const Groups = loadable(() => import('client/containers/Groups'), {
  ssr: false,
})
const GroupDetail = loadable(() => import('client/containers/Groups/Detail'), {
  ssr: false,
})
// const VDCs = loadable(() => import('client/containers/VDCs'), { ssr: false })
// const ACLs = loadable(() => import('client/containers/ACLs'), { ssr: false })

export const PATH = {
  INSTANCE: {
    VMS: {
      LIST: `/${RESOURCE_NAMES.VM}`,
      DETAIL: `/${RESOURCE_NAMES.VM}/:id`,
    },
    VROUTERS: {
      LIST: `/${RESOURCE_NAMES.V_ROUTER}`,
    },
  },
  TEMPLATE: {
    VMS: {
      LIST: `/${RESOURCE_NAMES.VM_TEMPLATE}`,
      DETAIL: `/${RESOURCE_NAMES.VM_TEMPLATE}/:id`,
      INSTANTIATE: `/${RESOURCE_NAMES.VM_TEMPLATE}/instantiate`,
      CREATE: `/${RESOURCE_NAMES.VM_TEMPLATE}/create`,
    },
  },
  STORAGE: {
    DATASTORES: {
      LIST: `/${RESOURCE_NAMES.DATASTORE}`,
      DETAIL: `/${RESOURCE_NAMES.DATASTORE}/:id`,
    },
    IMAGES: {
      LIST: `/${RESOURCE_NAMES.IMAGE}`,
      DETAIL: `/${RESOURCE_NAMES.IMAGE}/:id`,
    },
    MARKETPLACES: {
      LIST: `/${RESOURCE_NAMES.MARKETPLACE}`,
      DETAIL: `/${RESOURCE_NAMES.MARKETPLACE}/:id`,
    },
    MARKETPLACE_APPS: {
      LIST: `/${RESOURCE_NAMES.APP}`,
      DETAIL: `/${RESOURCE_NAMES.APP}/:id`,
      CREATE: `/${RESOURCE_NAMES.APP}/create`,
    },
  },
  NETWORK: {
    VNETS: {
      LIST: `/${RESOURCE_NAMES.VNET}`,
      DETAIL: `/${RESOURCE_NAMES.VNET}/:id`,
    },
    VN_TEMPLATES: {
      LIST: `/${RESOURCE_NAMES.VN_TEMPLATE}`,
      DETAIL: `/${RESOURCE_NAMES.VN_TEMPLATE}/:id`,
    },
    SEC_GROUPS: {
      LIST: `/${RESOURCE_NAMES.SEC_GROUP}`,
      DETAIL: `/${RESOURCE_NAMES.SEC_GROUP}/:id`,
    },
  },
  INFRASTRUCTURE: {
    CLUSTERS: {
      LIST: `/${RESOURCE_NAMES.CLUSTER}`,
      DETAIL: `/${RESOURCE_NAMES.CLUSTER}/:id`,
    },
    HOSTS: {
      LIST: `/${RESOURCE_NAMES.HOST}`,
      DETAIL: `/${RESOURCE_NAMES.HOST}/:id`,
      CREATE: `/${RESOURCE_NAMES.HOST}/create`,
    },
    ZONES: {
      LIST: `/${RESOURCE_NAMES.ZONE}`,
      DETAIL: `/${RESOURCE_NAMES.ZONE}/:id`,
    },
  },
  SYSTEM: {
    USERS: {
      LIST: `/${RESOURCE_NAMES.USER}`,
      DETAIL: `/${RESOURCE_NAMES.USER}/:id`,
    },
    GROUPS: {
      LIST: `/${RESOURCE_NAMES.GROUP}`,
      DETAIL: `/${RESOURCE_NAMES.GROUP}/:id`,
    },
  },
}

const ENDPOINTS = [
  {
    label: T.Instances,
    icon: InstancesIcons,
    routes: [
      {
        label: T.VMs,
        path: PATH.INSTANCE.VMS.LIST,
        sidebar: true,
        icon: VmsIcons,
        Component: VirtualMachines,
      },
      {
        label: (params) => [T.VMDetailId, params.id],
        path: PATH.INSTANCE.VMS.DETAIL,
        Component: VirtualMachineDetail,
      },
      {
        label: T.VirtualRouters,
        path: PATH.INSTANCE.VROUTERS.LIST,
        sidebar: true,
        icon: VRoutersIcons,
        Component: VirtualRouters,
      },
    ],
  },
  {
    label: T.Templates,
    icon: TemplatesIcon,
    routes: [
      {
        label: T.VMTemplates,
        path: PATH.TEMPLATE.VMS.LIST,
        sidebar: true,
        icon: TemplateIcon,
        Component: VmTemplates,
      },
      {
        label: T.InstantiateVmTemplate,
        path: PATH.TEMPLATE.VMS.INSTANTIATE,
        Component: InstantiateVmTemplate,
      },
      {
        label: T.CreateVmTemplate,
        path: PATH.TEMPLATE.VMS.CREATE,
        Component: CreateVmTemplate,
      },
    ],
  },
  {
    label: T.Storage,
    icon: StorageIcon,
    routes: [
      {
        label: T.Datastores,
        path: PATH.STORAGE.DATASTORES.LIST,
        sidebar: true,
        icon: DatastoreIcon,
        Component: Datastores,
      },
      {
        label: T.Images,
        path: PATH.STORAGE.IMAGES.LIST,
        sidebar: true,
        icon: ImageIcon,
        Component: Images,
      },
      {
        label: T.Marketplaces,
        path: PATH.STORAGE.MARKETPLACES.LIST,
        sidebar: true,
        icon: MarketplaceIcon,
        Component: Marketplaces,
      },
      {
        label: T.Apps,
        path: PATH.STORAGE.MARKETPLACE_APPS.LIST,
        sidebar: true,
        icon: MarketplaceAppIcon,
        Component: MarketplaceApps,
      },
      {
        label: T.CreateMarketApp,
        path: PATH.STORAGE.MARKETPLACE_APPS.CREATE,
        Component: CreateMarketplaceApp,
      },
    ],
  },
  {
    label: T.Networks,
    icon: NetworksIcon,
    routes: [
      {
        label: T.VirtualNetworks,
        path: PATH.NETWORK.VNETS.LIST,
        sidebar: true,
        icon: NetworkIcon,
        Component: VirtualNetworks,
      },
      {
        label: T.NetworkTemplates,
        path: PATH.NETWORK.VN_TEMPLATES.LIST,
        sidebar: true,
        icon: NetworkTemplateIcon,
        Component: VNetworkTemplates,
      },
    ],
  },
  {
    label: T.Infrastructure,
    icon: InfrastructureIcon,
    routes: [
      {
        label: T.Clusters,
        path: PATH.INFRASTRUCTURE.CLUSTERS.LIST,
        sidebar: true,
        icon: ClusterIcon,
        Component: Clusters,
      },
      {
        label: (params) => [T.ClusterDetailId, params.id],
        path: PATH.INFRASTRUCTURE.CLUSTERS.DETAIL,
        Component: ClusterDetail,
      },
      {
        label: T.Hosts,
        path: PATH.INFRASTRUCTURE.HOSTS.LIST,
        sidebar: true,
        icon: HostIcon,
        Component: Hosts,
      },
      {
        label: T.CreateHost,
        path: PATH.INFRASTRUCTURE.HOSTS.CREATE,
        Component: CreateHost,
      },
      {
        label: (params) => [T.HostDetailId, params.id],
        path: PATH.INFRASTRUCTURE.HOSTS.DETAIL,
        Component: HostDetail,
      },
      {
        label: T.Zones,
        path: PATH.INFRASTRUCTURE.ZONES.LIST,
        sidebar: true,
        icon: ZoneIcon,
        Component: Zones,
      },
    ],
  },
  {
    label: T.System,
    icon: SystemIcon,
    routes: [
      {
        label: T.Users,
        path: PATH.SYSTEM.USERS.LIST,
        sidebar: true,
        icon: UserIcon,
        Component: Users,
      },
      {
        label: (params) => [T.UserDetailId, params.id],
        path: PATH.SYSTEM.USERS.DETAIL,
        Component: UserDetail,
      },
      {
        label: T.Groups,
        path: PATH.SYSTEM.GROUPS.LIST,
        sidebar: true,
        icon: GroupIcon,
        Component: Groups,
      },
      {
        label: (params) => [T.GroupDetailId, params.id],
        path: PATH.SYSTEM.GROUPS.DETAIL,
        Component: GroupDetail,
      },
    ],
  },
]

export { ENDPOINTS }

export default { PATH, ENDPOINTS }
