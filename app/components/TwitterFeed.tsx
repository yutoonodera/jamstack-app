export default function TwitterFeed({ username }: { username: string }) {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
      fetch(`/api/twitter?username=${username}`)
        .then(res => res.json())
        .then(data => {
          setTweets(data.data || []);
        });
    }, [username]);

    return (
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Twitter投稿</h2>
        <div className="space-y-6">
          {tweets.map(tweet => (
            <div key={tweet.id} className="p-4 border rounded-lg shadow bg-white">
              <p>{tweet.text}</p>
              <a
                href={`https://twitter.com/${username}/status/${tweet.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline mt-2 block"
              >
                Twitterで見る →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
