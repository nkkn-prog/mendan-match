export default function ConversationPage({ params }: { params: { conversationId: string } }) {
  return (
    <div>
      <h1>Conversation</h1>
      <p>Conversation ID: {params.conversationId}</p>
    </div>
  );
}