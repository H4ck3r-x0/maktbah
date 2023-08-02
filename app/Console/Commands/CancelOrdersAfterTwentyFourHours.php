<?php

namespace App\Console\Commands;

use App\Models\Order;
use Illuminate\Console\Command;

class CancelOrdersAfterTwentyFourHours extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:cancel-orders-after-twenty-four-hours';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automatically cancele orders after 24 hours';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $orders = Order::currentStatus('sent_to_library')
            ->where('updated_at', '<=', now()->subDay())
            ->get();

        foreach ($orders as $order) {
            $order->setStatus('canceled_by_library', 'Automatically canceled after 24 hours');
        }
    }
}
