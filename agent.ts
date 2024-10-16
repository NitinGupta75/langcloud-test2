import { ChatAnthropic } from "@langchain/anthropic";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
});

const tools = [
  new TavilySearchResults({ maxResults: 3, }),
];

export const graph = createReactAgent({ llm: model, tools });