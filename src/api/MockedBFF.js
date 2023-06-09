// Mocked Backend-for-Frontend (BFF)
export class MockedBFF {
    constructor() {
    
      this.bffData = [
        {
          category: "Placeholder Category",
          title: "Add Local DNS Addresses.",
          description: "Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore.Quiquia numquam tempora eius dolor dolorem dolore. Adipisci porro sed amet dolor ipsum. Ipsum amet neque adipisci neque modi quaerat porro. Est etincidunt aliquam est numquam aliquam. Labore sit dolorem adipisci aliquam porro. Eius dolore adipisci porro sed. Ut dolorem quiquia quiquia.",
          optimizedPrompt: "Placeholder OptimizedPrompt",
          result: "Placeholder Result",
          resultHistory: [
            {
                request: "How can I add lokal DNS Adresses in windows?",
                response: "To add local DNS addresses in Windows, you can modify the hosts file, which is a plain text file used by the operating system to map hostnames to IP addresses. Here's how to edit the hosts file on a Windows machine:\n\n1. Open Notepad as an administrator:\n   - Press the Windows key to open the Start menu.\n   - Type \"Notepad\" in the search bar.\n   - Right-click on the Notepad application in the search results and choose \"Run as administrator.\"\n\n2. Open the hosts file:\n   - In Notepad, click on \"File\" in the top left corner and then select \"Open.\"\n   - Navigate to the following directory: `C:\\Windows\\System32\\drivers\\etc`\n   - Change the file type dropdown in the bottom right corner from \"Text Documents (*.txt)\" to \"All Files (*.*)\"\n   - Select the \"hosts\" file and click \"Open.\"\n\n3. Add local DNS addresses:\n   - In the hosts file, you'll see some lines starting with \"#\" (which are comments) and possibly some existing mappings.\n   - Add your local DNS addresses at the end of the file in the following format: `[IP address] [domain name]`\n   - For example, to map the IP address `192.168.1.10` to the domain name `example.local`, you would add a line like this: `192.168.1.10 example.local`\n   - You can add as many mappings as you need, each on a new line.\n\n4. Save the changes:\n   - Click \"File\" in the top left corner of Notepad and then select \"Save.\"\n   - Close Notepad.\n\n5. Clear DNS cache:\n   - Press the Windows key and type \"cmd\" in the search bar.\n   - Right-click on \"Command Prompt\" in the search results and choose \"Run as administrator.\"\n   - In the command prompt, type the following command and press Enter: `ipconfig /flushdns`\n\nNow, your local DNS addresses have been added, and the system should recognize the new mappings. If you encounter any issues, ensure there are no typos in the hosts file and that you've saved the changes correctly."
            },
            {
              request: "How can I add lokal DNS Adresses in windows?",
              response: "To add local DNS addresses in Windows, you can modify the hosts file, which is a plain text file used by the operating system to map hostnames to IP addresses. Here's how to edit the hosts file on a Windows machine:\n\n1. Open Notepad as an administrator:\n   - Press the Windows key to open the Start menu.\n   - Type \"Notepad\" in the search bar.\n   - Right-click on the Notepad application in the search results and choose \"Run as administrator.\"\n\n2. Open the hosts file:\n   - In Notepad, click on \"File\" in the top left corner and then select \"Open.\"\n   - Navigate to the following directory: `C:\\Windows\\System32\\drivers\\etc`\n   - Change the file type dropdown in the bottom right corner from \"Text Documents (*.txt)\" to \"All Files (*.*)\"\n   - Select the \"hosts\" file and click \"Open.\"\n\n3. Add local DNS addresses:\n   - In the hosts file, you'll see some lines starting with \"#\" (which are comments) and possibly some existing mappings.\n   - Add your local DNS addresses at the end of the file in the following format: `[IP address] [domain name]`\n   - For example, to map the IP address `192.168.1.10` to the domain name `example.local`, you would add a line like this: `192.168.1.10 example.local`\n   - You can add as many mappings as you need, each on a new line.\n\n4. Save the changes:\n   - Click \"File\" in the top left corner of Notepad and then select \"Save.\"\n   - Close Notepad.\n\n5. Clear DNS cache:\n   - Press the Windows key and type \"cmd\" in the search bar.\n   - Right-click on \"Command Prompt\" in the search results and choose \"Run as administrator.\"\n   - In the command prompt, type the following command and press Enter: `ipconfig /flushdns`\n\nNow, your local DNS addresses have been added, and the system should recognize the new mappings. If you encounter any issues, ensure there are no typos in the hosts file and that you've saved the changes correctly."
            }
          ],
          tags: [
              "Placeholder Tag 1",
              "Placeholder Tag 2"
          ]
        },
      
        // From here onwards, are the additional data objects
      
        ...Array.from({ length: 59 }, (v, i) => ({
          category: `Category ${i + 2}`,
          title: `Title ${i + 2}`,
          description: `Description ${i + 2}`,
          optimizedPrompt: `OptimizedPrompt ${i + 2}`,
          result: `Result ${i + 2}`,
          resultHistory: [
            {
              request: `Request ${i + 2}.1`,
              response: `Response ${i + 2}.1`
            },
            {
              request: `Request ${i + 2}.2`,
              response: `Response ${i + 2}.2`
            }
          ],
          tags: []
        }))
      ];
      
    }
  

    getData() {
      return this.bffData;
    }

    getTileData() {
      // Here we are returning a map of the bffData to the simplified data structure.
      // Adjust this transformation as necessary for your use case.
      return this.bffData.map((item) => ({
        title: item.title,
        category : item.category,
        description: item.description
      }));
    }
  }
  
  