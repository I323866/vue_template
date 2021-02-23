import defaultSettings from '@/settings'

const title = defaultSettings.title || '气象中心日运行信息汇总系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
