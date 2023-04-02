import { fetchUserRepositories } from '@/lib/fetchers'

function RepoListItem({ repo }: { repo: any }) {
  // const { data, error } = useSWR('/api/repos', fetcher)
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  // return data.map((repo) => (
  // const repo = {
  //   id: 1,
  //   name: 'repo1',
  //   description: 'description1',
  //   url: 'https://github.com'
  // }

  return (
    <div>Repo</div>
    // <li key={repo.id} className="py-4">
    //   <a href={repo.url} className="text-lg font-medium">
    //     {repo.name}
    //   </a>
    //   <p className="text-gray-500">{repo.description}</p>
    // </li>
  )
}

export default async function RepoList() {
  const data = await fetchUserRepositories()

  return (
    <div>
      <h2 className="text-xl font-bold">Repositories</h2>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
      {/* <ul className="divide-y divide-gray-200">
        <RepoListItem repo={'hello'} />
      </ul> */}
    </div>
  )
}
