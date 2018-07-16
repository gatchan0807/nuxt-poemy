export function escapeContents(rawContents) {
  let contents = rawContents

  contents = contents.replace(/ /g, '&nbsp;')
  contents = contents.replace(/</g, '&lt;')
  contents = contents.replace(/>/g, '&gt;')
  contents = contents.replace(/\n/g, '<br>')

  return contents
}
